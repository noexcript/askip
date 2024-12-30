import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { db } from "@/firebase";
import { collection, where } from "firebase/firestore";
import { useToast } from "./use-toast";

const formSchema = z.object({
  name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres."),
  instagram: z.string().url("Deve ser uma URL válida."),
  position: z
    .number()
    .min(1, "A posição deve ser um número maior ou igual a 1.")
    .max(20, "A posição deve ser um número menor ou igual a 20."),
});

const useFans = () => {
  const [open, setOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const fansCollection = collection(db, "fans");

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      instagram: "",
      position: 1,
    },
  });

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = form;

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      if (editingUser !== null) {
        const updatedUsers = users.map((user, index) =>
          index === editingUser ? data : user
        );
        setUsers(updatedUsers);
      } else {
        const q = query(
          fansCollection,
          where("position", "==", data.position),
          limit(1)
        );
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          toast({
            variant: "destructive",
            description: "Posição já adicionado.",
          });
          return;
        }

        const qInstagram = query(
          fansCollection,
          where("instagram", "==", data.instagram),
          limit(1)
        );

        const querySnapshotInstagram = await getDocs(qInstagram);
        if (!querySnapshotInstagram.empty) {
          toast({
            variant: "destructive",
            description: "Instagram já adicionado.",
          });
          return;
        }

        
        await addDoc(fansCollection, {
          ...data,
          timestamp: new Date(),
        });
        setUsers([...users, data]);
      }
      reset();
      setEditingUser(null);
      setOpen(false);
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Error na operação.",
      });
    } finally {
      toast({
        variant: "default",
        description: "Sucesso na operação.",
      });
      setIsLoading(false);
    }
  };

  const startEditing = (index) => {
    const user = users[index];
    reset(user);
    setEditingUser(index);
    setOpen(true);
  };

  const deleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  };

  return {
    onSubmit,
    startEditing,
    deleteUser,
    users,
    handleSubmit,
    control,
    open,
    setOpen,
    editingUser,
    errors,
  };
};

export { useFans };
