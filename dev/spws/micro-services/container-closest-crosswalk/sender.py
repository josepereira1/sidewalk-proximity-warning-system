#!/usr/bin/env python
import pika

class Sender:

	def __init__(self, ip):
		self.setHost(ip)


	def setHost(self, ip):
		self.connection = pika.BlockingConnection(pika.ConnectionParameters(host=ip))
		self.channel = self.connection.channel()

	def setQueue(self, queue):
		self.queue = queue
		self.channel.queue_declare(queue=self.queue)

	def send(self, msg):
		self.channel.basic_publish(exchange='', routing_key=self.queue, body=msg)

	def close(self):
		self.connection.close()
