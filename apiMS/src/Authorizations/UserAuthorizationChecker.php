<?php

namespace App\Authorizations;

use App\Entity\User;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;
use Symfony\Component\Security\Core\Security;

class UserAuthorizationChecker
{
    private array $methodAllowed = [
        Request::METHOD_PUT,
        Request::METHOD_PATCH,
        Request::METHOD_DELETE,
    ];
    private ?User $user;
    public function __construct(Security $security)
    {
        // Current user
        $this->user = $security->getUser();
    }

    public function check(User $user, string $method): void
    {
        $this->isAuthenticated();
        if ($this->isMethodAllowed($method) && $user->getId() !== $this->user->getId()) {
            $errorMessage = "It's not your resource";
            throw new UnauthorizedHttpException($errorMessage, $errorMessage);
        }
    }

    public function isAuthenticated(): void
    {
        if (null === $this->user) {
            $errorMessage = "You are not authenticated";
            throw new UnauthorizedHttpException($errorMessage, $errorMessage);
        }
    }

    public function isMethodAllowed(string $method): bool
    {
        return in_array($method, $this->methodAllowed, true);
    }
}
