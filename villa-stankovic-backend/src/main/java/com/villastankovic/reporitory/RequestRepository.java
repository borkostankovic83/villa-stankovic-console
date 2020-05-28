package com.villastankovic.reporitory;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.villastankovic.model.Request;

@CrossOrigin
@RepositoryRestResource(collectionResourceRel ="request", path ="request")
public interface RequestRepository extends CrudRepository<Request, Integer> {

	List<Request> findAllByOrderByIdAsc();
	
}
