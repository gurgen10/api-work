import axios from 'axios';

export default class AuthService {

  _apiGroupId = 'https://avetiq-test.firebaseapp.com/group/gurgen_torosyan';
  _apiUserId = 'https://avetiq-test.firebaseapp.com/user/gurgen_torosyan';


  async getGroupId() {
    try {
      const res = await axios.get( this._apiGroupId)
      const groupId = await res.data.groupId;
      
      if (!res.data ) {
        throw new Error(`Could not fetch ${this._apiGroupId}, Res status: ${res.status}`);
      }
      return groupId;

    } catch (error) {
      console.log( error)
    }
  }
  async getUserId() {
    try {
      const res = await axios.get( this._apiUserId)
      const userId = await res.data.userId;
      
      if (!res.data) {
        throw new Error(`Could not fetch ${this._apiUserId}, Res status: ${res.status}`);
      }
      return userId;

    } catch (error) {
      console.log( error)
    }
  }


}
