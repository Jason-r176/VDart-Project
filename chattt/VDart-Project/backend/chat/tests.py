from django.test import TestCase
from django.test import TestCase, Client

class ChatApiTests(TestCase):
    def setUp(self):
        self.client = Client()  # Creates a test client to make requests

    def test_messages_endpoint(self):
        # This sends a GET request to '/api/messages/' endpoint
        response = self.client.get('/api/messages/')
        
        # Check if the response status code is 200 (OK)
        self.assertEqual(response.status_code, 200)


# Create your tests here.
