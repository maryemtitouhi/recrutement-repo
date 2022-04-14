package com.ant.recrutement.config;


import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.Authentication;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Configuration
public class JwtConfig {

    private String secretKey = "ANTTechnology";


    public List<String> getRole(String token) {
        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().get("roles", List.class);
    }

    public String getSubject(String token) {
        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getSubject();
    }

    public String generateToken(Authentication authentication) {
        String username = authentication.getName();
        List<String> roles=  new ArrayList<>();
        authentication.getAuthorities().forEach(auth -> roles.add(auth.getAuthority()));
        String token = Jwts.builder()
                .setSubject(username)
                .claim("roles", roles)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 36000000))
                .signWith(SignatureAlgorithm.HS512, secretKey)
                .compact();
        return  "Bearer " + token;
    }
}
