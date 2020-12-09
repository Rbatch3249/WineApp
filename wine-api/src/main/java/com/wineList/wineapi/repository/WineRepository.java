package com.wineList.wineapi.repository;

import com.wineList.wineapi.model.Wines;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@Repository
public interface WineRepository extends CrudRepository<Wines,Long> {



    Iterable<Wines> findAllWineById(Long wineId);



}

