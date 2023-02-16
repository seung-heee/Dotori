package season.blossom.dotori.user;

import lombok.Data;

@Data
public class AuthRequestDto {
    private String email;
    private String password;
}
