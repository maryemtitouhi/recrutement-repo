package com.ant.recrutement.services;

import com.ant.recrutement.config.JwtConfig;
import com.ant.recrutement.entities.User;
import com.ant.recrutement.repositories.UserRepository;
import com.ant.recrutement.responses.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtConfig jwtConfig;
    @Autowired
    @Lazy
    private AuthenticationManager authenticationManager;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        User user = userRepository.findByEmail(username);
        return user;
    }

    public LoginResponse authenticate(User user) {
        Authentication authentication = new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword());
        authentication = authenticationManager.authenticate(authentication);
        String token = jwtConfig.generateToken(authentication);
        return new LoginResponse(token);
    }
}
