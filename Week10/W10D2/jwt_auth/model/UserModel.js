import { Sequelize } from "sequelize";
import db from '../config/elephantsql.js'

const {DataTypes} = Sequelize;

const Users = db.define('users', {
    first_name:{
        type:DataTypes.STRING
    },
    last_name:{
        type:DataTypes.STRING
    },
    username:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
    password: {
        type:DataTypes.STRING
    },


  // createdAt:{
    //     field:'created_at'
    // }
    //id createdAt updatedAt- mandatory columns with sequlize

},
{//to ignore createdAt updatedAt
    timestamps:false
})

export default Users;


// id, created at updatat at are mandatory with sequilze 