import requests
import urllib.parse

class CloudFlareError(Exception):
    """
    Base exception for CloudFlare module
    """
    pass


class ZoneNotFound(CloudFlareError):
    """
    Raised when a specified zone is not found from CloudFlare
    """
    pass


class RecordNotFound(CloudFlareError):
    """
    Raised when a specified record is not found for a zone from CloudFlare
    """
    pass



class CloudFlare:

    api_url = 'https://api.cloudflare.com/client/v4/zones/'

    email = ''

    api_key = ''

    proxied = True

    headers = None

    domain = None

    zone = None

    dns_records = None

    public_ip_finder = (
        'https://api.ipify.org/',
        'https://jsonip.com/',
        'https://ifconfig.co/json'
    )

    def __init__(self, email: str, api_key: str, domain: str, proxied: bool = False):

        self.email = email
        self.api_key = api_key
        self.domain = domain
        self.proxied = proxied
        self.headers = {
            'X-Auth-Key': api_key,
            'X-Auth-Email': email
        }
        self.setup_zone()

    def request(self, url, method, data=None):

        method = getattr(requests, method)
        response = method(
            url,
            headers=self.headers,
            json=data
        )
        content = response.json()
        if response.status_code != 200:
            print(content)
            raise requests.HTTPError(content['message'])
        return content

    def setup_zone(self):

        # Initialize current zone
        zones_content = self.request(self.api_url, 'get')
        domain_segments = self.domain.split(".")

        # Join the last two segments of the domain name.
        domain = domain_segments[-2] + "." + domain_segments[-1]

        try:
            zone = [zone for zone in zones_content['result'] if zone['name'] == domain][0]
        except IndexError:
            # if that's not on the list, try with three segments instead
            domain = domain_segments[-3] + "." + domain
            try:
                zone = [zone for zone in zones_content['result'] if zone['name'] == domain][0]
            except IndexError:
                raise ZoneNotFound('Cannot find zone information for the domain {domain}.'
                                   .format(domain=self.domain))
        self.zone = zone

        # Initialize dns_records of current zone
        dns_content = self.request(self.api_url + zone['id'] + '/dns_records', 'get')
        self.dns_records = dns_content['result']

    def refresh(self):

        self.setup_zone()

    def get_record(self, dns_type, name):

        try:
            record = [record for record in self.dns_records
                      if record['type'] == dns_type and record['name'] == name][0]
        except IndexError:
            raise RecordNotFound(
                'Cannot find the specified dns record in domain {domain}'
                    .format(domain=name))
        return record

    def create_record(self, dns_type, name, content, **kwargs):

        data = {
            'type': dns_type,
            'name': name,
            'content': content
        }
        if kwargs.get('ttl') and kwargs['ttl'] != 1:
            data['ttl'] = kwargs['ttl']
        if kwargs.get('proxied') is True:
            data['proxied'] = True
        else:
            data['proxied'] = True
        content = self.request(
            self.api_url + self.zone['id'] + '/dns_records',
            'post',
            data=data
        )
        self.dns_records.append(content['result'])
        print('DNS record successfully created')
        return content['result']

    def update_record(self, dns_type, name, content, **kwargs):

        record = self.get_record(dns_type, name)
        data = {
            'type': dns_type,
            'name': name,
            'content': content
        }
        if kwargs.get('ttl') and kwargs['ttl'] != 1:
            data['ttl'] = kwargs['ttl']
        if kwargs.get('proxied') is True:
            data['proxied'] = True
        else:
            data['proxied'] = False
        content = self.request(
            urllib.parse.urljoin(self.api_url, self.zone['id'] + '/dns_records/' + record['id']),
            'put',
            data=data
        )
        record.update(content['result'])
        print('DNS record successfully updated')
        return content['result']

    def delete_record(self, dns_type, name):

        record = self.get_record(dns_type, name)
        content = self.request(
            urllib.parse.urljoin(self.api_url, self.zone['id'] + '/dns_records/' + record['id']),
            'delete'
        )
        cached_record_id = [i for i, rec in enumerate(self.dns_records) if rec['id'] == content['result']['id']][0]
        del self.dns_records[cached_record_id]
        return content['result']['id']
