package com.wineList.wineapi.service;

import com.wineList.wineapi.repository.WineRepository;
import com.wineList.wineapi.model.Wines;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class WineService {

    @Autowired
    WineRepository wineRepository;


    public Optional<Wines> getWineById(Long id) {
        return wineRepository.findById(id);
    }

    public List<Wines> getAllWines() {
        List<Wines> wineList = new ArrayList<>();
        wineRepository.findAll().forEach(wineList::add);
        return wineList;
    }


    public Wines addWine(Wines wine) {
        return wineRepository.save(wine);
    }

    public List<Wines> searchByWine(String wineType) {
        List<Wines> filteredWines = new ArrayList<>();
        for (Wines wine : wineRepository.findAll()) {
            if (wine.getWineType().toLowerCase().contains(wineType)) {
                filteredWines.add(wine);
            }
        }
        return filteredWines;
    }
}




