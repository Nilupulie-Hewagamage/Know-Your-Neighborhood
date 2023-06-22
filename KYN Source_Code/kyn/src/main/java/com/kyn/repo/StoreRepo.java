package com.kyn.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.kyn.entity.Store;

public interface StoreRepo extends JpaRepository<Store, Integer>{
	@Query("SELECT s from Store s WHERE storename=:storename")
	public List<Store> searchByStoreName(String storename);
	@Query("SELECT s from Store s WHERE ownername=:ownername")
	public List<Store> searchByOwnerName(String ownername);
	@Query("SELECT s from Store s WHERE phonenumber=:phonenumber")
	public List<Store> searchByPhoneNumber(String phonenumber);
	@Query("SELECT s from Store s WHERE localities=:localities")
	public List<Store> searchByLocalities(String localities);
	 @Query("SELECT s FROM Store s WHERE s.storename LIKE %:query% OR s.ownername LIKE %:query% OR s.phonenumber LIKE %:query% OR s.localities LIKE %:query%")
	    List<Store> findByCriteria(@Param("query") String query);
}
