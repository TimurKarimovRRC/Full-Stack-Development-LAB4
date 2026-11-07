import { organizationRepo } from "../repositories/organizationRepo.js";

export function getRoles() {
    return organizationRepo.getRoles();
}