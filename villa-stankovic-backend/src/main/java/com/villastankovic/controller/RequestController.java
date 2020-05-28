package com.villastankovic.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.villastankovic.model.Request;
import com.villastankovic.service.RequestService;

@RestController
@RequestMapping("/requests")
public class RequestController {
		
	RequestService requestService;
		
	@Autowired
	public RequestController(RequestService requestService) {
		this.requestService = requestService;
	}

	@CrossOrigin
	@GetMapping("/all")
	public List<Request> getAll(){
		return requestService.findAll();
		
	}
	
	@CrossOrigin
	@GetMapping("/highlighted")
	public List<Request> getHighlighted(){
		
		return requestService.findAll();
		
	}

}
