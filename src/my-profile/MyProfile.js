function MyProfile() {
    return (
      <div class="first">
        <h2>Dashboard</h2>
        <div class="second">
        <label for="name">Name </label>
         <input type="text" name="name" id="name" placeholder="Enter name" required/>
        </div>
        <br>
        </br>


        <div>
        <label for="email">Email </label>
         <input type="text" name="email" id="email" placeholder="Enter email" required/>

        </div>
        <br>
        </br>

        <div>
        <label for="role">Role  </label>
         <input type="text" name="role" id="role" placeholder="Enter role" required/>

        </div>
        <br>
        </br>
        <input type="submit" class="button-33" value="Submit"/>

      </div>
      
    );
  }

export default MyProfile;