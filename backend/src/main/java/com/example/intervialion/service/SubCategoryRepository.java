package com.example.intervialion.service;
import com.example.intervialion.model.SubCategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface SubCategoryRepository extends JpaRepository<SubCategory, Long> {
    List<SubCategory> findByCategoryId(Long categoryId); // הפונקציה הזו תחפש את תתי הקטגוריות לפי categoryId
}
