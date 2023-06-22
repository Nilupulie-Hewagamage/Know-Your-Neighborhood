package com.kyn.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kyn.entity.Store;
import com.kyn.repo.StoreRepo;
import com.kyn.service.StoreService;


@Service("StoreService")
public class StoreImp implements StoreService{

	@Autowired
	StoreRepo Store;

	@Override
	public void AddStore(Store addstore) {
		
		Store.save(addstore);
		System.out.println("added");
		// TODO Auto-generated method stub
		
	}
	@Override
	public void DeleteStore(Store addstore) {
		Store.delete(addstore);
	
	}
	@Override
	public List<Store> ShowStore() {
		// TODO Auto-generated method stub
		
		return Store.findAll();
	}
	public List<Store> searchStores(String query) {
        return Store.findByCriteria(query);
    }
	@Override
	public List<Store> SearchByStoreName(String storename) {
		
		return Store.searchByStoreName(storename);
	}
	@Override
	public List<Store> SearchByOwnerName(String ownername) {
		
		return Store.searchByOwnerName(ownername);
	}
	@Override
	public List<Store> SearchByPhoneNumber(String phonenumber) {
		
		return Store.searchByPhoneNumber(phonenumber);
	}
	@Override
	public List<Store> SearchByLocalities(String localities) {
		
		return Store.searchByLocalities(localities);
	}

}
