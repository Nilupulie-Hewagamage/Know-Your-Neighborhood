package com.kyn.service;

import java.util.List;

import com.kyn.entity.Store;

public interface StoreService {

	void AddStore(Store register);
	 void DeleteStore(Store register);
	 public List<Store> ShowStore();
	 public List<Store> SearchByStoreName(String storename);
	 public List<Store> SearchByOwnerName(String ownername);
	 public List<Store> SearchByPhoneNumber(String phonenumber);
	 public List<Store> SearchByLocalities(String localities);
}
