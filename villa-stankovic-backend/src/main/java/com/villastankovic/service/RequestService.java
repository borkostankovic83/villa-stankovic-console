package com.villastankovic.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.villastankovic.model.Request;
import com.villastankovic.reporitory.RequestRepository;

@Service
public class RequestService{
	
	@Autowired
	RequestRepository requestRepository;
	
	public List<Request> findAll(){
	    List<Request> request = requestRepository.findAllByOrderByIdAsc();
	    return request;
	}
	
}
