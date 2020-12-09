package com.wineList.wineapi.controller;


import com.wineList.wineapi.model.Wines;
import com.wineList.wineapi.response.DataResponse;
import com.wineList.wineapi.response.Response;
import com.wineList.wineapi.response.exceptions.NotFound;
import com.wineList.wineapi.service.WineService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.lang.annotation.Repeatable;
import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class WineController {
    @Autowired
    WineService wineService;

    Logger logger = LoggerFactory.getLogger(WineController.class);



    @RequestMapping(method = RequestMethod.GET,value = "/wines/search/{wineType}")
    public List<Wines> searchType(@PathVariable String wineType){
       return wineService.searchByWine(wineType);
    }


    @RequestMapping(method = RequestMethod.GET, value = "/wines")
    public ResponseEntity<Response> getAllWines() throws NotFound{
        if(wineService.getAllWines().isEmpty()){
            throw new NotFound("Error: could not fetch wines");
        }else {
            logger.info("Success: All wines fetched");
            return new ResponseEntity<>(new DataResponse(200,"Success", wineService.getAllWines()), HttpStatus.OK);
        }

    }


    @RequestMapping(method = RequestMethod.GET, value= "/wines/{id}")
    public ResponseEntity<Response> getWinesById(@PathVariable Long id) throws NotFound{
        if(wineService.getWineById(id).isEmpty()){
            throw new NotFound("Error: could not fetch wine with ID #" + id);
        }else{
            logger.info("Success: account fetched with wine ID #" + id);
            return new ResponseEntity<>(new DataResponse(200,"Success",wineService.getWineById(id)),HttpStatus.OK);
        }
    }

    @RequestMapping(method = RequestMethod.POST, value = "/wines")
    public ResponseEntity<Response> addWine(@RequestBody Wines wine){
        logger.info("Success:Wine added");
        return new ResponseEntity<>(new DataResponse(201,"New Wine added", wineService.addWine(wine)),HttpStatus.CREATED);
    }


}

