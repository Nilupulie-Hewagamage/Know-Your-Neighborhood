package com.kyn.controller;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kyn.Dto.Message;
import com.kyn.service.MessageSender;
import com.fasterxml.jackson.core.JsonProcessingException;
@RestController
public class MessageController {
	private final MessageSender messageSender;
	public MessageController(MessageSender messageSender) {
	this.messageSender = messageSender;
	}
	@PostMapping(path = "/messages/{userName}", consumes =
	MediaType.APPLICATION_JSON_VALUE)
	public void sendMessage(@PathVariable String userName, @RequestBody Message message)
	throws JsonProcessingException {
		System.out.println(userName);
		System.out.println(message.getText());
	messageSender.sendMessage(userName, message);
	}
}
