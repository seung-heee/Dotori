package season.blossom.dotori.user;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @PostMapping("/api/signin")
    public ResponseEntity<HttpStatus> signIn(@RequestBody AuthRequestDto authRequestDto) {
        User user = User.builder()
                .email(authRequestDto.getEmail())
                .password(authRequestDto.getPassword())
                .build();

        user.encodePassword(passwordEncoder);
        userRepository.save(user);

        return new ResponseEntity<>(HttpStatus.OK);
    }



}
