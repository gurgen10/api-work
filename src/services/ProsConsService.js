import axios from 'axios';

export default class ProsConsService {

    _apiBase = 'https://avetiq-test.firebaseapp.com/proscons/';
    
  
    async getData (url) {
        try {
          const res = await axios.get(url)
          const prosCros = await res.data;

        if (!res.data) {
            throw new Error(`Could not fetch ${url}, Res status: ${res.status}`);
          }
          return prosCros; 
          
        } catch (error) {
          return error 
        }  
    }

    async updateData (url, body) {
      try {
        
        const res = await axios.put(url, body)
        const prosCros = await res.data;
      if (!res.data) {
          throw new Error(`Could not fetch ${url}, Res status: ${res.status}`);
        }
        return prosCros; 
        
      } catch (error) {
        return error 
      }  
  }
  
    async getProsCons (groupId, userId) {

      const data = await this.getData(`${this._apiBase}group/${groupId}/user/${userId}`);
      
      return this._transformPronsCrons(data);
    }

    async updateProsConsData (groupId, userId, body) {
      
     const updateProsConsData = await this.updateData(`${this._apiBase}group/${groupId}/user/${userId}`, body);
     console.log('updateProsConsData', updateProsConsData);
     return this._transformPronsCrons(updateProsConsData);


    }
  
    _transformPronsCrons = (data) => {
      return {
        pros: data.pros,
        cons: data.cons,
      }
      
    }
  }
    