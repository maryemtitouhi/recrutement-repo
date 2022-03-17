package com.ant.recrutement.repositories;

import com.ant.recrutement.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}