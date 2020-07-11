const ProductService = {
    insertUserProfile(db, newUserProfile) {
        return db
          .insert(newUserProfile)
          .into('user_data')
    },
    getProductsByEmail(db, categoryArray) {
      return db 
        .from(products)
        .select('*')
        .where({'main_tag': categoryArray
    })
    }
}