const Group = require('../models/group.model')

const createGroup = async (req, res) => {
    try {
        const name = req.body.name
        const group_admin = req.user._id
        const members = [...req.body.members, group_admin]
        const newGroup = await Group.create({
            name, members, group_admin
        })
        if (newGroup) {
            return res.status(200).json(newGroup)
        } else {
            return res.status(400).json({ message: "Something went wrong" })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal erver error", error })
    }
}

const deleteGroup = async (req, res) => {
    try {
        const id = req.body.id;
        const group = await Group.findById(id);

        if (!group) {
            return res.status(404).json({ message: "Group not found" });
        }

        const req_id = req.user._id;

        if (req_id.toString() == group.group_admin.toString()) {
            await Group.findByIdAndDelete(id);
            return res.status(200).json({ message: "Group successfully deleted" });
        } else {
            return res.status(403).json({ message: "Only the admin can delete the group" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong", error });
    }
};

const renameGroup = async (req, res) => {
    try {
        const id = req.body.id;
        const newName = req.body.name;
        const req_id = req.user._id;

        const group = await Group.findById(id);

        if (!group) {
            return res.status(404).json({ message: "Group not found" });
        }

        if (req_id.toString() === group.group_admin.toString()) {
            group.name = newName;
            await group.save();

            return res.status(200).json({ message: "Group name successfully updated", group });
        } else {
            return res.status(403).json({ message: "Only the group admin can rename the group" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong", error });
    }
};

const getGroupsByUser = async (req, res) => {
    try {
        const user_id = req.user._id;
        const groups = await Group.find({
            members: user_id
        }).populate("group_admin", "name email profile_pic")
          .populate("members", "name email profile_pic");

        if (groups) {
            return res.status(200).json(groups)
        } else {
            return res.status(400).json({ message: 'Something went wrong' })
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = {
    createGroup,
    deleteGroup,
    renameGroup,
    getGroupsByUser
}