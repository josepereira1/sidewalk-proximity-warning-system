#!/usr/bin/env python
import pika

class Receiver:

	def __init__(self, ip):
		self.setHost(ip)

	def setHost(self, ip):
		self.connection = pika.BlockingConnection(pika.ConnectionParameters(host=ip))
		self.channel = self.connection.channel()

	def setQueue(self, queue, callback):
		self.channel.queue_declare(queue=queue)
		self.channel.basic_consume(queue=queue, on_message_callback=callback, auto_ack=True)
		self.channel.start_consuming()

	def close(self):
		self.connection.close()