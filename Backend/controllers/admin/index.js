const adminSchema = require('../../models/admin')
const { errorResponse, sendResponse, encrypt, decrypt, createToken } = require('../../utils')


/*
 API URL: api/admin/register
 Description: This api is for admin registration.
*/
exports.register = async (req, res) => {
    try {
        //try
        if (req.body?.password) {
            req.body.password = encrypt(req.body.password)
        }

        const registerAdmin = new adminSchema(req.body)
        const data = await registerAdmin.save()
        const resPayload = {
            _id: data?._id,
            username: data?.username,
            createdAt: data?.createdAt,
            updatedAt: data?.updatedAt,
            active: data?.active
        }
        return sendResponse(res, "Admin created successfully", resPayload, 201)
    } catch (error) {
        //catch for error
        if (error?.message) {
            //Bad Request error
            return errorResponse(res, error?.message, error, 400)
        }
        //For internal error
        return errorResponse(res, "Something went wrong", error)
    }
}


/*
 API URL: api/admin/login
 Description: This api is for admin login.
*/
exports.login = async (req, res) => {
    try {
        //try
        const adminData = await adminSchema.find({ username: req.body.username }).limit(1)
        if (adminData?.length === 0) {
            //if admin not exits and send bad request status in response
            return errorResponse(res, "Admin does not exists!", null, 400)
        }

        if (req.body?.password !== decrypt(adminData[0]?.password)) {
            //if wrong password send error message and send as unauthenticated user
            return errorResponse(res, "Wrong password!", null, 401)
        }
        const resPayload = {
            _id: adminData[0]?._id,
            username: adminData[0]?.username,
            createdAt: adminData[0]?.createdAt,
            updatedAt: adminData[0]?.updatedAt,
            active: adminData[0]?.active
        }
        return sendResponse(res, "Admin logged-in successfully", {token:createToken(resPayload)}, 200)
    } catch (error) {
        //catch for error
        if (error?.message) {
            //Bad Request error
            return errorResponse(res, error?.message, error, 400)
        }
        //For internal error
        return errorResponse(res, "Something went wrong", error)
    }
}