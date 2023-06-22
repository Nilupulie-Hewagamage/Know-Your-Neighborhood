package com.kyn.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.kyn.Dto.Message;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
@Service
public class MessageSender {
	private static final String HOOKS_URL = "https://hooks.slack.com/services/%s";
	
	
	public void sendMessage(String userName, Message message) throws
	JsonProcessingException{
		Map<String,String> myMap=new HashMap<String, String>();
		
		myMap.put("Nilupulie Hewagamage","T05B19L0FBK/B05ANHHE70B/avWMCn8es6Mz8qFTuOp4btkl");
		//https://hooks.slack.com/services/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
	//	https://hooks.slack.com/services/
	String userChannelId = myMap.get(userName);
	System.out.println("username"+userChannelId);
	System.out.println(HOOKS_URL);
	String userWebhookUrl = String.format(HOOKS_URL,userChannelId);
	RestTemplate restTemplate = new RestTemplate();
	HttpHeaders headers = new HttpHeaders();
	headers.setContentType(MediaType.APPLICATION_JSON);
	ObjectMapper objectMapper = new ObjectMapper();
	String messageJson = objectMapper.writeValueAsString(message);
	HttpEntity<String> entity = new HttpEntity<>(messageJson,headers);
	System.out.println(userWebhookUrl);
	restTemplate.exchange("https://hooks.slack.com/services/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", HttpMethod.POST,
	entity, String.class);
	}

}


