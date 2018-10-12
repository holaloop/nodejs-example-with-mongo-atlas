var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
    name: String,
    email: String,
    password: String
}/*, { collection: 'tb_user' }*/);

/**
 * model은 데이터베이스에서 데이터를 읽고, 생성하고, 수정하는프로그래밍 인터페이스를 정의합니다. 
 * var Book = mongoose.model('book', bookSchema); 
 * 첫번째 인자 book’ 은 해당 document가 사용 할 collection의 단수적 표현입니다. 즉, 이 모델에서는 ‘books’ collection 을 사용하게 되겠죠. 이렇게 자동으로 단수적 표현을 복수적(plural) 형태로 변환하여 그걸 collection 이름으로 사용합니다. collection 이름을 plural 형태로 사용하는건 mongodb의 네이밍컨벤션 중 하나입니다.
 * 
 * 만약에, collection 이름을 임의로 정하고 싶다면, schema 를 만들 때 따로 설정해야 합니다.
 * 
 * var dataSchema = new Schema({..}, { collection: 'COLLECTION_NAME' });
 */
mongoose.model('User', UserSchema);
module.exports = mongoose.model('User');