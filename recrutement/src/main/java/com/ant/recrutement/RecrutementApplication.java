package com.ant.recrutement;

import com.ant.recrutement.entities.Admin;
import com.ant.recrutement.repositories.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class RecrutementApplication  implements CommandLineRunner {
    @Autowired
    private AdminRepository adminRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public static void main(String[] args) {
        SpringApplication.run(RecrutementApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        Admin admin = new Admin();
        admin.setEmail("admin@gmail.com");

        admin.setPassword(passwordEncoder.encode("123"));
        admin.setEnabled(true);

       //  adminRepository.save(admin);

    }
}
