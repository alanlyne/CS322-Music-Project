package com.example.demo;

import java.security.Principal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

@SpringBootApplication
@EnableOAuth2Sso
@RestController
@EnableWebSecurity
public class SocialApplication extends WebSecurityConfiguration {

	public static void main(String[] args) {
		SpringApplication.run(SocialApplication.class, args);
	}
	
	@RequestMapping("/user")
	  public Principal user(Principal principal) {
		System.out.println("YOYOYO");
	    return principal;
	  }
	
	@RequestMapping("/home")
	  public Principal home(Principal principal) {
	    return principal;
	  }
	
	@RequestMapping("/login/spotify")
	  public String login(@RequestParam(value = "code") String code, @RequestParam(value = "state") String state) {
		System.out.println("CODE: " + code);
		System.out.println("STATE: " + state);
	    return "hi";
	  }
	

	  protected void configure(HttpSecurity http) throws Exception {
	    http
	      .antMatcher("/**")
	      .authorizeRequests()
	        .antMatchers("/", "/login**", "/webjars/**", "/error**")
	        .permitAll()
	      .anyRequest()
	        .authenticated();
	  }
//	 protected void configure(HttpSecurity http) throws Exception {
//	    http
//	      .antMatcher("/**")
//	      .authorizeRequests()
//	        .antMatchers("/", "/login**", "/webjars/**", "/error**", "/login/spotify/**", "/home/**")
//	        .permitAll()
//	      .anyRequest()
//	        .authenticated()
//	        .and().logout().logoutSuccessUrl("/").permitAll()
//	        .and().csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());;
//	  }

}
