package com.kyn.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kyn.entity.User;
import com.kyn.repo.UserRepo;
import com.kyn.service.UserService;

@Service("UserService")
public class UserImp implements UserService {
	@Autowired
	UserRepo st;
	@Override
	public void AddUser(User register) {
		
		st.save(register);
		System.out.println("added");
		// TODO Auto-generated method stub
		
	}
	@Override
	public void DeleteUser(User register) {
	st.delete(register);
	
	}
	@Override
	public List<User> ShowUser() {
		// TODO Auto-generated method stub
		
		return st.findAll();
	}
	@Override
	public List<User> SearchByName(String name) {
		
		return st.searchByName(name);
	}
}
