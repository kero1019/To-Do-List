const List = require("../Modules/Mongoose");

const getAllLists = async (req, res) => {
    try {
        const lists = await List.find();
        res.status(200).json({
            status: "success",
            data: lists 
        });
    }
    catch (error) {
        res.json({ status: "failed", data: { error } })
    }
}

const getList = async (req, res) => {
    try {
        const listID = req.params.listID;
        const list = await List.findById(listID);
        res.status(200).json({
            status: "success",
            data: list
        });
    } catch (error) {
        res.status(404).json({ status: "failed", data: { error } })
    }
}

const addList = async (req, res) => {
    try {
        const newList = new List({number: List.length + 1 , ...req.body});
        await newList.save(newList)
        res.status(201).json({
            status: "success",
            data: newList
        })
    } catch (error) {
        res.json({ status: "failed", data: { error } })
    }
}

const updateList = async (req, res) => {
    try {
        const listID = req.params.listID;
        const updatedList = await List.updateOne({ _id: listID }, { $set: { ...req.body } });
        res.status(200).json({
            status: "success",
            data: updatedList 
        });
    } catch (error) {
        res.json({ status: "failed", data: { error } })
    }
}

const deleteList = async (req, res) => {
    try {
        const listID = req.params.listID;
        await List.deleteOne({ _id: listID });
        res.status(200).json({ success: "List deleted successfully" })
    } catch (error) {
        res.json({ status: "failed", data: { error } })
    }
}


module.exports ={
    getAllLists, 
    getList, 
    addList, 
    updateList, 
    deleteList
}