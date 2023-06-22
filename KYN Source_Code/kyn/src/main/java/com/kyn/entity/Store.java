package com.kyn.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="store")
public class Store {
		
		
		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		@Column(name="storeId")
		private Integer storeId;
		@Column(name="storename")
		private String storename;
		@Column(name="ownername")
		private String ownername;
		@Column(name="phonenumber")
		private String phonenumber;
		@Column(name="localities")
		private String localities;
		
		public Store() {
			
		}
		
		public Store(Integer storeId, String storename, String ownername, String phonenumber, String localities) {
			super();
			this.storeId = storeId;
			this.storename = storename;
			this.ownername = ownername;
			this.phonenumber = phonenumber;
			this.localities = localities;
		}
		
		public Integer getStoreId() {
			return storeId;
		}
		public void setStoreId(Integer storeId) {
			this.storeId = storeId;
		}
		public String getStorename() {
			return storename;
		}
		public void setStorename(String storename) {
			this.storename = storename;
		}
		public String getOwnername() {
			return ownername;
		}
		public void setOwnername(String ownername) {
			this.ownername = ownername;
		}
		public String getPhonenumber() {
			return phonenumber;
		}
		public void setPhonenumber(String phonenumber) {
			this.phonenumber = phonenumber;
		}
		public String getLocalities() {
			return localities;
		}
		public void setLocalities(String localities) {
			this.localities = localities;
		}
		
		@Override
		public String toString() {
			return "Store [store_Id=" + storeId + ", storename=" + storename + ", ownername=" + ownername
					+ ", phonenumber=" + phonenumber + ", localities=" + localities + "]";
		}

		
}
