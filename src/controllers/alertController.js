// controllers/alertController.js
import Alert from "../models/Alert.js";

export const getAlert = async (req, res) => {
    try {
        const alert = await Alert.getAlert();
        // Return as array to maintain compatibility with frontend
        res.status(200).json({
            alertType: alert.alertType,
            alertMessage: alert.alertMessage,
            publishAlert: alert.publishAlert
        });
       
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createAlert = async (req, res) => {
    try {
        const existingAlert = await Alert.findOne();
        
        if (existingAlert) {
            return res.status(400).json({ 
                message: "An alert already exists. Please update the existing alert instead." 
            });
        }
        
        const alert = new Alert(req.body);
        await alert.save();
        res.status(201).json(alert);
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({ message: "Only one alert can exist at a time" });
        } else {
            res.status(500).json({ message: error.message });
        }
    }
}

export const updateAlert = async (req, res) => {
    try {
        const alert = await Alert.updateAlert(req.body);
        res.json(alert);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteAlert = async (req, res) => {
    try {
        const alert = await Alert.findOneAndDelete();
        
        if (!alert) {
            return res.status(404).json({ message: "No alert found to delete" });
        }
        
        res.json({ message: "Alert deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}