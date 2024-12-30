
import { PlusCircle, Instagram, Edit, Trash } from "lucide-react";
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
import { useFans } from "@/hooks/useFans";
import { useContext } from "react";
import { Context } from "@/context";


const Fans = () => {
  const {
    onSubmit,
    startEditing,
    deleteUser,
    users,
    handleSubmit,
    control,
    setOpen,
    editingUser,
    errors,
    open
  } = useFans()

  const { isAuthenticated } = useContext(Context)

  return (
    <div className="container mx-auto py-10 ">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between mb-4 flex-col-reverse gap-4 md:flex-row">
          <h2 className="text-2xl font-bold text-white">Top 20 fãs</h2>
          {isAuthenticated && (
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
                  <div className="form-item">
                    <label className="form-label">Posição</label>
                    <Input
                      {...control.register("position", { valueAsNumber: true })}
                      type="number"
                      className="form-control"
                    />
                    {errors.position && <span className="text-red-500">{errors.position.message}</span>}
                  </div>
                  <Button type="submit" className="w-full rounded-none bg-blue-950 hover:bg-blue-900 h-12">
                    {editingUser !== null ? "Salvar Alterações" : "Registrar"}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          )
          }
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="p-4 text-white"> <span className="border-l px-2 text"> Nome </span></TableHead>
              <TableHead className="p-4 text-white"> <span className="border-l px-2 text">  Instagram </span></TableHead>
              {isAuthenticated &&
                <TableHead className="p-4 text-white"> <span className="border-l px-2 text"> Ações </span></TableHead>
              }
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
                {isAuthenticated && (<TableCell className="flex gap-2">
                  <Button className="bg-blue-900 hover:bg-blue-950" onClick={() => startEditing(index)}> <Edit /> </Button>
                  <Button className="bg-red-900 hover:bg-red-950" onClick={() => deleteUser(index)}><Trash /> </Button>
                </TableCell>)
                }
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
