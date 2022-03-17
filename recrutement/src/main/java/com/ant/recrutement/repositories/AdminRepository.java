package com.ant.recrutement.repositories;

import com.ant.recrutement.entities.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Admin, Integer> {
}
