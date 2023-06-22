package com.kyn.service;

import java.util.List;

import com.kyn.entity.User;

public interface UserService {
	void AddUser(User register);
	 void DeleteUser(User register);
	 public List<User> ShowUser();
	 public List<User> SearchByName(String name);
	 
}
