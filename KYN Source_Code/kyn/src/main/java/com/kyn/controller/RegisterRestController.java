package com.kyn.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

import com.kyn.entity.User;
import com.kyn.repo.UserRepo;
import com.kyn.service.UserImp;

import com.kyn.service.UserService;

import com.kyn.entity.User;

@RestController
public class RegisterRestController {
	@Autowired
	UserImp stservice;
	
	
    
	@GetMapping("/testrest")
	public String testmethod()
	{
		return "hello";
	}
	
	//Add Records 
	
	@PostMapping(value = "/adduser")
	public String addProduct(@RequestBody User register) 
	{	    	
		System.out.println(register.getEmail());
		stservice.AddUser(register);
			return "Data Added";
	}
	@GetMapping("/showcust")
	public List<User> showcust()
	{
		return stservice.ShowUser();
	}

	
}
