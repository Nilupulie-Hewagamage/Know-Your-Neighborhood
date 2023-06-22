package com.kyn.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.kyn.entity.User;

public interface UserRepo extends JpaRepository<User, Integer>{
	@Query("SELECT u from User u WHERE name=:name")
	public List<User> searchByName(String name);
	
	User findByEmail(String email);
	

}
