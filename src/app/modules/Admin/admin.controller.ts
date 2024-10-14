import { Request, Response } from "express";
import { AdminService } from "./admin.service";

const getAllAdminFromDb = async (req: Request, res: Response) => {
    try {
        const result = await AdminService.getAllAdminFromDb(req.query);
        res.status(200).json({
            success: true,
            message: "Admin data fetched!",
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error?.name || "Error creating admin",
            error: error,
        });
    }
};

export const AdminController = {
    getAllAdminFromDb,
};
