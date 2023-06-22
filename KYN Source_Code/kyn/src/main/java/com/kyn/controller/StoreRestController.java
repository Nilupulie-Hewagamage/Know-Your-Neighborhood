package com.kyn.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.kyn.entity.Store;
import com.kyn.service.StoreImp;

@RestController
public class StoreRestController {
	@Autowired
	StoreImp StoreService;
	
	@GetMapping("/teststore")
	public String carTest()
	{
		return "Welcome To add Store";
	}
	//Add Records 
	
		 @PostMapping(value = "/addstore")
		    public String addCar(@RequestBody Store addstore) 
		  {	    	
			 System.out.println(addstore.getStorename());
			 StoreService.AddStore(addstore);
		    	return "Store has successdfully Added";
		    }

	
		//show all the records
		 @GetMapping("/showstore")
			public List<Store> ShowStore()
			{
				return StoreService.ShowStore();
			}
		 @GetMapping("/search")
		    public ResponseEntity<List<Store>> searchStores(@RequestParam("query") String query) {
		        List<Store> searchResults = StoreService.searchStores(query);
		        return ResponseEntity.ok(searchResults);
		    }
		 @GetMapping("/showstorename")
		 public List<Store> SearchByStoreName(@RequestParam("storename") String storename) {
				
				return StoreService.SearchByStoreName(storename);
			}
		 @GetMapping("/showownername")
		 public List<Store> SearchByOwnerName(@RequestParam("ownername")String ownername) {
				
				return StoreService.SearchByOwnerName(ownername);
			}
		 @GetMapping("/showphonenumber")
		 public List<Store> SearchByPhoneNumber(@RequestParam("phonenumber")String phonenumber) {
				
				return StoreService.SearchByPhoneNumber(phonenumber);
			}
		 
		 @GetMapping("/showlocalities")
		 public List<Store> SearchByLocalities(@RequestParam("localities")String localities) {
				
				return StoreService.SearchByLocalities(localities);
			}
}

