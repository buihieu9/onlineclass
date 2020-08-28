const components = {};

components.signInScreen = ` <div class="container">
<div class="signin-content">
  <div class="row">
    <div class="signin-img">
      <img src="../img/signin-image.jpg" />
      <div class="redirect-to-resgister cursor-pointer">
        Create an account
      </div>
    </div>

    <div class="signin-form">
      <h2 class="signin-heading">Sign In</h2>

      <form id="login-form">
        <div class="input-name-wrapper">
          <div class="input-wrapper">
            <label for="input-signin-email"> <i class="fas fa-user"></i></label>
            <input
              type="email"
              name="email"
              id="input-signin-email"
              placeholder="Email"
              value=""
            />
            <div class="error" id="email-error"></div>
          </div>
          <div class="input-wrapper">
            <label for="input-signin-password">
              <i class="fas fa-lock"></i>
            </label>
            <input
              type="password"
              name="password"
              id="input-signin-password"
              placeholder="Password"
            />
            <div class="error" id="password-error"></div>
            <div id="all-error"></div>

          </div>
        </div>
        <div class="form-action">
          <div class="form-remember">
            <input type="checkbox" name="remember" id="remember-me" />
            <label for="remember-me" class="cursor-pointer"
              >Remember Me</label
            >
            <div id="forgot-password" class= "cursor-pointer">Forgot password ?</div>
          </div>
          <button class="btn" type="submit">
            Log in
          </button>


        </div>
      </form>

      <div class="login-social-media">
        <span>Or login with</span>
        <i class="fab fa-facebook-square cursor-pointer" id= "facebook"></i>
        <i class="fab fa-google-plus-square cursor-pointer"></i>
        <i class="fab fa-twitter-square cursor-pointer"></i>
      </div>
    </div>
  </div>
</div>
</div>`;

components.signUpScreen = ` <div class="container">
<div class="signup-content">
  <div class="row">
    <div class="signup-form">
      <h2 class="signup-heading">Sign Up</h2>
      <form id="register-form">
        <div class="input-name-wrapper">
         <div class="input-yourname">
          <div class="input-wrapper">
            <label for="input-first-name"><i class="fas fa-user"></i></label>
            <input type="text" name="firstName" placeholder="First Name" id="input-first-name" />
            <div class="error" id="first-name-error"></div>
          </div>

          <div class="input-wrapper">
            <label for="input-last-name"><i class="fas fa-user"></i></label>
            <input type="text" name="lastName" placeholder="last Name" id="input-last-name" />
            <div class="error" id="last-name-error"></div>
          </div>
         </div>

          <div class="input-wrapper">
            <label for="input-email"> <i class="fas fa-envelope"></i></label>
            <input type="email" name="email" id="input-email" placeholder="Email" />
            <div class="error" id="email-error"></div>
          </div>
          <div class="input-wrapper">
            <label for="input-password">
              <i class="fas fa-lock"></i>
            </label>
            <input type="password" name="password" id="input-password" placeholder="Password" />
            <div class="error" id="password-error"></div>
          </div>
          <div class="input-wrapper">
            <label for="input-comfirm-password">
              <i class="fas fa-lock"></i>
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="confirmPassword"
              id="input-comfirm-password"
            />
            <div class="error" id="confirm-password-error"></div>
          </div>
        </div>
        <div class="form-action">
          <div class="form-check-job">
           <div class="column">
            <input type="radio" name="job" value="teacher" id="teacher"  />
            <label for="teacher" class="cursor-pointer">Teacher</label>
           </div>
           <div class="column">
            <input type="radio" name="job" value="student" id="student"/>
            <label for="student" class="cursor-pointer">Student</label>
           </div>
           <div class="error" id="check-job"></div>
         </div>
          <button class="btn" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
    <div class="signup-img">
      <img src="../img/signup-image.jpg" />
      <div class="redirect-to-signin cursor-pointer">
        I am already member
      </div>
    </div>
  </div>
</div>`;

components.classRoom = `
<h1> hello</h1>
<button class="btn" id="btn-signout">SignOut</button>
`;

components.forgotScreen = ` <div class="container">
<div class="forgot-content">
  <div class="row">
    <div class="forgot-img">
      <img src="../img/signin-image.jpg" alt="" />
    </div>
    <div class="forgot-form">
      <div class="title-heading">
        <h2 class="forgot-heading">Forget Password</h2>
        <p>
          Please enter your email address below and we will send you
          information to recover your account.
        </p>
      </div>
      <form id="forgot-form">
        <div class="input-name-wrapper">
          <div class="input-wrapper">
            <label for="input-email"> <i class="fas fa-envelope"></i></label>
            <input
              type="email"
              name="email"
              id="input-email"
              placeholder="Email"
            />
            <div class="error" id="forgot-error"></div>
          </div>
          <div class="form-action">
            <button class="btn reset-password" type="submit">Send </button>
            <button class="btn cancel" >Cancel</button>
          </div>
      </form>
    </div>
  </div>
</div>
</div>`;
