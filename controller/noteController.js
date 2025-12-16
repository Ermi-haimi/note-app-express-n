import noteModel from "../models/noteModel.js";

export const getNotes = async (req, res, next)=>{
    try{
        const notes = await noteModel.find().sort({createdAt:-1});
        res.status(200).json({
            success: true, 
            count: notes.length, 
            data: notes})
    }catch(err){
        next(err);
    }
}

export const createNote = async(req, res, next)=>{
    try {
        const note = await noteModel.create(req.body);
        res.status(201).json({
            success: true, 
            data:note
        })
    } catch (err) {
        next(err)
    }
}

export const updateNote = async (req, res, next)=>{
    try{
        const note = await noteModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })
        if(!note){
            return res.status(404).json({
                success:false, 
                message:"Note not found"
            });
        }
        res.status(200).json({
            success:true, 
            data:note
        })
    }catch(err){
        next(err)
    }
}

export const getNoteById = async (req, res, next) => {
    try {
        const note = await noteModel.findById(req.params.id);

        if (!note) {
            return res.status(404).json({
                success: false,
                message: "Note not found",
            });
        }

        res.status(200).json({
            success: true,
            data: note,
        });
    } catch (err) {
        next(err);
    }
};



export const deleteNote = async (req, res, next) => {
    try {
        const note = await noteModel.findByIdAndDelete(req.params.id);

        if (!note) {
            return res.status(404).json({
                success: false,
                message: "Note not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Note deleted successfully",
        });
    } catch (err) {
        next(err);
    }
};