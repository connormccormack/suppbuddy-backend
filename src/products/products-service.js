const productsService = {
    insertUserProfile(db, newUserProfile) {
        return db
          .insert(newUserProfile)
          .into('user_data')
    },
    getUserProfile(db, email) {
      return db
        .from('user_data')
        .where('email', email)
        .select('*')
    },
    getProductsByUserData(db, categoryArray) {
      return db 
        .from('products')
        .select('*')
        .whereIn('main_tag', categoryArray)
    }
    
}

module.exports = productsService;