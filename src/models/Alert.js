// models/Alert.js
import mongoose from "mongoose";

const alertSchema = new mongoose.Schema(
  {
    alertType: {
      type: String,
      enum: ['info', 'warning', 'error', 'success'],
      default: 'warning'
    },
    alertMessage: {
      type: String,
      required: [true, 'Alert message is required'],
      trim: true,
      maxlength: [500, 'Alert message cannot exceed 500 characters']
    },
    publishAlert: {
      type: Boolean,
      default: false
    }
  },
  { 
    timestamps: true 
  }
);

// Static method to get the single alert
alertSchema.statics.getAlert = async function() {
  let alert = await this.findOne();
  if (!alert) {
    alert = new this({
      alertType: 'info',
      alertMessage: '',
      publishAlert: false
    });
    await alert.save();
  }
  return alert;
};

// Static method to update the single alert
alertSchema.statics.updateAlert = async function(updateData) {
  let alert = await this.findOne();
  if (!alert) {
    alert = new this(updateData);
  } else {
    Object.assign(alert, updateData);
  }
  await alert.save();
  return alert;
};

export default mongoose.model("Alert", alertSchema);