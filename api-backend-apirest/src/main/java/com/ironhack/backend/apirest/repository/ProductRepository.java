package com.ironhack.backend.apirest.repository;

import com.ironhack.backend.apirest.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    @Query("select p from Product p where p.name like %?1%")
    public List<Product> findByName(String term);
    public List<Product> findByNameContainingIgnoreCase(String name); //term to search for
    public List<Product> findByNameStartingWithIgnoreCase(String name); //term to search for
}

