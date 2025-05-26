import {Request,Response} from "express";
import {Recipe,IRecipe} from "../../models/Recipe";

interface RecipeResponse {
    success: boolean;
    data?: IRecipe | IRecipe[];
    message?: string;
}

export const createRecipe = async (req: Request, res: Response<RecipeResponse>) => {
    try {
        const newRecipe = new Recipe(req.body);
        const recipe = await newRecipe.save();
        return res.status(201).json({ success: true, data: recipe });
    } catch (error) {
        console.error(error);
        const message = error instanceof Error ? error.message : "Error creating recipe";
        return res.status(500).json({ success: false, message });
    }
}

export const getRecipes = async (req: Request, res: Response<RecipeResponse>) => {
    try {
        const { id } = req.params;

        if (id) {
            const recipe = await Recipe.findById(id);
            if (!recipe) {
                return res.status(404).json({ success: false, message: "Recipe not found" });
            }
            return res.status(200).json({ success: true, data: recipe });
        }

        const recipes = await Recipe.find();
        return res.status(200).json({ success: true, data: recipes });
    } catch (error) {
        console.error(error);
        const message = error instanceof Error ? error.message : "Error getting recipes";
        return res.status(500).json({ success: false, message });
    }
}
export const updateRecipe = async (req: Request, res: Response<RecipeResponse>) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        const updatedRecipe = await Recipe.findByIdAndUpdate(
            id,
            updatedData,
            { new: true, runValidators: true }
        );

        if (!updatedRecipe) {
            return res.status(404).json({ success: false, message: "Recipe not found" });
        }

        return res.status(200).json({ success: true, data: updatedRecipe });
    } catch (error) {
        console.error(error);
        const message = error instanceof Error ? error.message : "Error updating recipe";
        return res.status(500).json({ success: false, message });
    }
}

export const deleteRecipe = async (req: Request, res: Response<RecipeResponse>) => {
    try {
        const { id } = req.params;

        const deletedRecipe = await Recipe.findByIdAndDelete(id);
        if (!deletedRecipe) {
            return res.status(404).json({ success: false, message: "Recipe not found" });
        }

        return res.status(200).json({ success: true, message: "Recipe deleted successfully" });
    } catch (error) {
        console.error(error);
        const message = error instanceof Error ? error.message : "Error deleting recipe";
        return res.status(500).json({ success: false, message });
    }
}

