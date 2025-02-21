import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const getData = asyncHandler(async (req, res, next) => {
    try {
        const { data } = req.body;

        if (!Array.isArray(data)) {
            return res.status(400).json(new ApiResponse(400, null, "Invalid input format"));
        }

        const numbers = data.filter(item => !isNaN(item));
        const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));
        const highestAlphabet = alphabets.length > 0 
            ? [alphabets.reduce((max, char) => char.toLowerCase() > max.toLowerCase() ? char : max)]
            : [];

        const response = new ApiResponse(200, {
            is_success: true,
            user_id: "Pranjal_Kumar_Ranjan_15_jan_2004",  // Replace with dynamic user data
            email: "22BCS13706@cuchd.in",        // Replace with dynamic user email
            roll_number: "22BCS13706",       // Replace with dynamic roll number
            numbers,
            alphabets,
            highest_alphabet: highestAlphabet
        }, "Data processed successfully");

        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json(new ApiResponse(500, null, "Internal server error"));
    }
})


const returnData = asyncHandler(async (req, res, next) => {
    res.status(200).json(new ApiResponse(200,{"operation_code":1 }))
})

export { getData ,returnData}
