import { useState } from "react";
import { useForm } from "react-hook-form";
import { PlusCircle, Facebook, Youtube, Instagram, Edit, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Esquema de validação com Zod
const formSchema = z.object({
  name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres."),
  instagram: z.string().url("Deve ser uma URL válida."),
});


const Fans = () => {
  const [open, setOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [users, setUsers] = useState([]);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      // facebook: "",
      // youtube: "",
      instagram: "",
    },
  });

  const { handleSubmit, control, reset, formState: { errors } } = form;

  const onSubmit = (data) => {
    if (editingUser !== null) {
      const updatedUsers = users.map((user, index) =>
        index === editingUser ? data : user
      );
      setUsers(updatedUsers);
    } else {
      setUsers([...users, data]);
    }
    reset();
    setEditingUser(null);
    setOpen(false);
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

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between mb-4 flex-col-reverse gap-4 md:flex-row">
          <h2 className="text-2xl font-bold text-white">Top 20 fãs</h2>
          <Dialog open={open} onOpenChange={setOpen} disableFocusLock>
            <DialogTrigger asChild>
              <Button className="rounded-none bg-blue-950 hover:bg-blue-900 h-12 w-full md:w-auto">
                <PlusCircle className="mr-2 h-6 w-6" />
                Novo fã
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gray-900 border-none bg-opacity-100 text-white">
              <DialogHeader>
                <DialogTitle>
                  {editingUser !== null
                    ? "Editar Vencedor"
                    : "Registrar Novo Vencedor"}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="form-item">
                  <label className="form-label">Nome</label>
                  <Input  
                    {...control.register("name")}
                    placeholder="John Doe"
                    className="form-control"
                  />
                  {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                </div>
                {/* <div className="form-item">
                  <label className="form-label">Facebook (opcional)</label>
                  <Input
                    {...control.register("facebook")}
                    placeholder="https://facebook.com/username"
                    className="form-control"
                  />
                  {errors.facebook && <span className="text-red-500">{errors.facebook.message}</span>}
                </div>
                <div className="form-item">
                  <label className="form-label">YouTube (opcional)</label>
                  <Input
                    {...control.register("youtube")}
                    placeholder="https://youtube.com/@username"
                    className="form-control"
                  />
                  {errors.youtube && <span className="text-red-500">{errors.youtube.message}</span>}
                </div> */}
                <div className="form-item">
                  <label className="form-label">Instagram</label>
                  <Input
                    {...control.register("instagram")}
                    placeholder="https://instagram.com/username"
                    className="form-control"
                  />
                  {errors.instagram && <span className="text-red-500">{errors.instagram.message}</span>}
                </div>
                <Button type="submit" className="w-full rounded-none bg-blue-950 hover:bg-blue-900 h-12">
                  {editingUser !== null ? "Salvar Alterações" : "Registrar"}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="p-4 text-white"> <span className="border-l px-2 text"> Nome </span></TableHead>
              <TableHead className="p-4 text-white"> <span className="border-l px-2 text">  Instagram </span></TableHead>
              <TableHead className="p-4 text-white"> <span className="border-l px-2 text"> Ações </span></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={index}>
                <TableCell className="flex items-center gap-2">
                  <Avatar>
                    <AvatarFallback className="font-bold">{user.name[0]}</AvatarFallback>
                  </Avatar>
                  {user.name}
                </TableCell>
                
                <TableCell>
                  {user.instagram && (
                    <a href={user.instagram} target="_blank" className="flex gap-2" rel="noopener noreferrer">
                      <Instagram className="h-6 w-6 text-pink-600 hover:text-pink-800" /> {user.instagram}
                    </a>
                  )}
                </TableCell>
                <TableCell className="flex gap-2">
                  <Button className="bg-blue-900 hover:bg-blue-950" onClick={() => startEditing(index)}> <Edit /> </Button>
                  <Button className="bg-red-900 hover:bg-red-950" onClick={() => deleteUser(index)}><Trash /> </Button>
                </TableCell>
              </TableRow>
            ))}
            {users.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="text-center">
                  Nenhum vencedor registrado.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Fans;
